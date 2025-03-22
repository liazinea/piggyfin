import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import {
    flexRender,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
} from "@tanstack/react-table";

const TabelaRelatorio = ({ data }) => {
    const [despesas, setDespesas] = useState([]);
    const [soma, setSoma] = useState(0);
    const [globalFilter, setGlobalFilter] = useState("");
    const [columnFilters, setColumnFilters] = useState([]);

    // Mapeia os dados do JSON para o formato esperado pelas colunas
    useEffect(() => {
        const mappedData = data.map((item) => ({
            descricao: item.des_descricao,
            categoria: item.categoria.cat_nome,
            valor: parseFloat(item.des_valor), // Converte string para número
            data: item.des_data,
        }));
        setDespesas(mappedData);
    }, [data]);

    const formatarData = (dataString) => {
        const data = new Date(dataString);
        const dia = data.getDate().toString().padStart(2, "0");
        const mes = data
            .toLocaleString("pt-BR", { month: "short" })
            .replace(".", "");
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    const columns = [
        {
            accessorKey: "descricao",
            header: "Descrição",
            cell: (data) => <p className={styles.headerTable}>{data.getValue()}</p>,
        },
        {
            accessorKey: "categoria",
            header: "Categoria",
            cell: (data) => <p className={styles.headerTable}>{data.getValue()}</p>,
        },
        {
            accessorKey: "valor",
            header: "Valor",
            cell: (data) => (
                <p className={styles.headerTable}>R$ {data.getValue().toFixed(2)}</p>
            ),
        },
        {
            accessorKey: "data",
            header: () => (
                <select
                    className={styles.data}
                    name="data"
                    onChange={(event) => {
                        setColumnFilters([{ id: "data", value: event.target.value }]);
                    }}
                >
                    <option value="">Data</option>
                    <option value="01">Janeiro</option>
                    <option value="02">Fevereiro</option>
                    <option value="03">Março</option>
                    <option value="04">Abril</option>
                    <option value="05">Maio</option>
                    <option value="06">Junho</option>
                    <option value="07">Julho</option>
                    <option value="08">Agosto</option>
                    <option value="09">Setembro</option>
                    <option value="10">Outubro</option>
                    <option value="11">Novembro</option>
                    <option value="12">Dezembro</option>
                </select>
            ),
            cell: (data) => (
                <p className={styles.info}>{formatarData(data.getValue())}</p>
            ),
            filterFn: (row, columnId, filterValue) => {
                if (!filterValue) return true; // Sem filtro, mostra tudo
                const data = new Date(row.getValue(columnId));
                const mes = (data.getMonth() + 1).toString().padStart(2, "0"); // +1 porque getMonth é 0-based
                return mes === filterValue;
            },
        },
    ];

    const table = useReactTable({
        data: despesas,
        columns,
        state: {
            globalFilter,
            columnFilters,
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    useEffect(() => {
        const total = table
            .getRowModel()
            .rows.reduce((acc, row) => acc + row.getValue("valor"), 0);
        setSoma(total);
    }, [table.getRowModel().rows]);

    return (
        <div>
            {table.getHeaderGroups().map((headerGroup) => (
                <div className={styles.header} key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <p
                            className={styles.colunas}
                            key={header.id}
                            style={{ width: `${header.getSize()}px` }}
                        >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                        </p>
                    ))}
                </div>
            ))}
            <div className={styles.celulas}>
                {table.getRowModel().rows.map((row, i) => (
                    <div
                        className={`${styles.celula} ${
                            i % 2 === 0 ? styles.claro : styles.escuro
                        }`}
                        key={row.id}
                    >
                        {row.getVisibleCells().map((cell) => (
                            <div
                                key={cell.id}
                                style={{ width: `${cell.column.getSize()}px` }}
                            >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <p>Total: R$ {soma.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default TabelaRelatorio;
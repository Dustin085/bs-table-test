import { useRef } from "react";

function InfoTableWithBtn({ data }) {
    const { id, title,tableData, workInfo } = data;
    const collapseId = useRef(`collapseEle${id}`);
    // let tableData = [
    //     {
    //         type: "thead",
    //         rows: [
    //             ["年度", "等別", "報考人數", "到考人數"]
    //         ]
    //     },
    //     {
    //         type: "tbody",
    //         rows: [
    //             [{ content: "113年", rowSpan: 2 }, "高考三級", "3,326", "2,291"],
    //             ["普通考試", "2,884", "2,192"]
    //         ]
    //     },
    //     {
    //         type: "thead",
    //         rows: [
    //             ["需用人數", "錄取分數", "錄取人數", "錄取率"]
    //         ]
    //     },
    //     {
    //         type: "tbody",
    //         rows: [
    //             ["159", "56.65", "165", "7.20%"],
    //             ["46", "70.80", "118", "5.38%"]
    //         ]
    //     }
    // ];
    return (
        <div className="info-table-box d-flex gap-1 flex-column align-items-center">
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#" + collapseId.current} aria-expanded="false" aria-controls={collapseId.current}>
                {title}
            </button>
            <div className="collapse" id={collapseId.current}>
                <table className="table align-middle text-center">
                    {
                        tableData.map((item) => {
                            return item.type === "thead" ? <TableHead rows={item.rows} /> : <TableBody rows={item.rows} />
                        })
                    }
                    {/* <thead>
                        <tr>
                            <th>年度</th>
                            <th>等別</th>
                            <th>報考人數</th>
                            <th>到考人數</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>113年</td>
                            <td>高考三級</td>
                            <td>3,326</td>
                            <td>2,291</td>
                        </tr>
                        <tr>
                            <td>普通考試</td>
                            <td>2,884</td>
                            <td>2,192</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th>需用人數</th>
                            <th>錄取分數</th>
                            <th>錄取人數</th>
                            <th>錄取率</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>159</td>
                            <td>56.65</td>
                            <td>165</td>
                            <td>7.20%</td>
                        </tr>
                        <tr>
                            <td>46</td>
                            <td>70.80</td>
                            <td>118</td>
                            <td>5.38%</td>
                        </tr>
                    </tbody> */}
                </table>
                <h5>工作內容</h5>
                <p>{workInfo}</p>
            </div>
        </div>
    );
}

function TableHead({ rows }) {
    return (
        <thead>
            {
                rows.map((row) => {
                    return (
                        <tr>
                            {row.map((item, index) => {
                                return <th key={index}>{item}</th>
                            })}
                        </tr>
                    )
                })
            }
        </thead>
    );
}

function TableBody({ rows }) {
    return (
        <tbody>
            {
                rows.map((row) => {
                    return (
                        <tr>
                            {row.map((item, index) => {
                                return typeof item === "string" ? <td key={index}>{item}</td> : <td rowSpan={item.rowSpan}>{item.content}</td>
                            })}
                        </tr>
                    )
                })
            }
            {/* <tr>
                <td rowSpan={2}>113年</td>
                <td>高考三級</td>
                <td>3,326</td>
                <td>2,291</td>
            </tr>
            <tr>
                <td>普通考試</td>
                <td>2,884</td>
                <td>2,192</td>
            </tr> */}
        </tbody>
    )
}

export default InfoTableWithBtn;
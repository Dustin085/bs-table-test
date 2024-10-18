import { useRef } from "react";

function InfoTableWithBtn({ data }) {
    const { id, title, tableData, workInfo } = data;
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
                <table className="table align-middle text-center table-primary">
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
                                return <th key={index}><WrapParaWhenChinese text={item} /></th>
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
                    // return <Row row={row} />
                    return (
                        <tr>
                            {row.map((item, index) => {
                                return typeof item === "string" ? <td key={index}><WrapParaWhenChinese text={item} /></td> : <td key={index} rowSpan={item.rowSpan}><WrapParaWhenChinese text={item.content} /></td>
                            })}
                        </tr>
                    )
                })
            }
        </tbody>
    )
    // 若tr需要用到表頭(th)可以使用
    // function Row({ row }) {
    //     let result = row.map((item, index) => {
    //         // 第一項作為表頭(th)
    //         if (index < 1) {
    //             return typeof item === "string" ? <th key={index}><WrapParaWhenChinese text={item} /></th> : <th key={index} rowSpan={item.rowSpan}><WrapParaWhenChinese text={item.content} /></th>
    //         } else {
    //             return typeof item === "string" ? <td key={index}><WrapParaWhenChinese text={item} /></td> : <td key={index} rowSpan={item.rowSpan}><WrapParaWhenChinese text={item.content} /></td>
    //         }
    //     });
    //     return (
    //         <tr>
    //             {result}
    //         </tr>
    //     )
    // }
}

function WrapParaWhenChinese({ text }) {
    // 如果是三個字以上的全中文字串就換行
    if (typeof text !== "string") {
        // 非字串就early return
        return "傳入非字串"
    }

    let isChinese = true;
    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) < 0x4E00 || text.charCodeAt(i) > 0x9FA5) {
            isChinese = false;
        }
    }
    if (isChinese === false) {
        // 不是中文就early return
        return text;
    }

    if (text.length >= 3) {
        return (
            <>
                {text.substring(0, Math.round(text.length / 2))}
                <br />
                {text.substring(Math.round(text.length / 2), text.length)}
            </>
        )
    } else {
        return text;
    }
}

export default InfoTableWithBtn;
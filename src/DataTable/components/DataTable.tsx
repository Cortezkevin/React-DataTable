import { CSSProperties } from "react";
import { Column, Row } from "../interfaces/interfaces";
import styles from '../styles/styles.module.css';

interface Props {
    data: Row[];
    columns: Column[];
		style?: CSSProperties;
		headerStyle?: CSSProperties;
		colStyle?: CSSProperties;
		rowStyle?: CSSProperties;
}

export const DataTable = ({ data, columns, style, headerStyle, colStyle, rowStyle } : Props) => {
  return (
    <div className={ styles.table } style={ style }>
			<div className={ styles.tableHeader } style={ headerStyle }>
				{
					columns.map( column => 
							<p 
								key={column.name}
								className={ styles.tableCol } 								
								style={ colStyle }
							>
								{ column.name }
							</p>
					)
				} 
			</div>
			<div className={ styles.tableBody }>
				{
					data.map( (row, index) => {
							const columnsValues = columns.map( column =>                         
									<p 
										key={ index + column.name }
										className={ styles.tableCol } 									
										style={ colStyle }
									>
										{ column.selector( row ) }
									</p>                        
							)

							return <div key={ index + "value" } style={ rowStyle } className={ styles.tableRow }>
									{columnsValues}
							</div>;
					})
				}
			</div>        
    </div>
  )
}

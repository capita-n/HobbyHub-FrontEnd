
const List = props =>
{
	const removeItem = (index) => {
		const arr = props.items.filter((i,j) => index !== j)
		props.updateTodo(arr)
	}

return (
	<ul>
    {
			props.items.map((item, index) => {
				return (
				<li key={index}>
		<div className="list-item">
		<span>
		<h4>{item}</h4>
		</span>
		<button className="btn-remove" onClick={() => removeItem(index)}>X</button>
		</div>
				</li>
				
				)
			}
			
			)
		}
  </ul>
)};

export default List;
import img_delete from '../../assets/delete.svg';
import './ListBlock.scss'

const ListBlock = ({isTodos, deleteTodo}) => {
   
    return (
        <div>
            <ul>            
            {
                isTodos.map((todo, index) => (
                    <li key={index.toString()}>
                        {todo}
                        <button>
                            <img src={img_delete} alt="delete_img" onClick={() => {deleteTodo(index)}}/>
                        </button>
                    </li> 

                ))
            }
            </ul>
        </div>
    )
}

export default ListBlock;
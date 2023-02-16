import React, {useState} from 'react';


const TodoList = ()=>
{

    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);

    
    const addActivity = ()=>
    {
       setListData((listData)=>
        {
            const updatedList = [...listData, activity];
            console.log(updatedList);
            setActivity('');
            return updatedList;
        })
        

    }

    const removeActivity = (i)=>
    {
        const updatedListData = listData.filter((element, id)=>
        {
            return i!== id;

        })
        setListData(updatedListData);
    }

    const removeall = ()=>
    {
        setListData([]);
    }

    return(
        <>
            <div className='container'>
                <div className="header">TODO LIST</div>
                <input type='text' placeholder='Add Activity' value = {activity} onChange= {(e)=>
                setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p className='List-heading' > Here is your List :{")"}   </p>
                {
                    listData !==[] && listData.map((data, i)=>
                    {
                        return (
                            <>
                                <p key = {i}>
                                    <div className='listData' >{data}</div>
                                    <span className='btn-position'><button onClick={()=>removeActivity(i)}>remove</button></span>
                                </p>
                            </>
                        )
                    })
                }
                {
                    listData.length > 1 && <button onClick={removeall} >Remove all</button>
                }
                
            </div>
        </>
    );
}

export default TodoList;
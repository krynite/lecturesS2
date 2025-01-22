export default function InvList(){

    const foodList = [
        {   name: 'Avocado',
            Price: 2
        },{
            name: 'English Cucumber',
            Price: 1.5
        },{
            name: 'Milk',
            Price: 2.79
        },{
            name: 'Flour Tortillas',
            Price: 3
        },{
            name: 'Butter',
            Price: 4
        },{
            name: 'Cantaloupe',
            Price: 3.29
        },{
            name: 'Banana',
            Price: 0.27
        }
    ]

    return (
        
        <>
            <ul>{foodList.map((food,index) => {
                return <li key={index}>{food.name}</li>
                }
            )}
        </ul>


            


        
        </>
        
    )
}
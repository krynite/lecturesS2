

export default function NewPetPage() {


    return (
        <>
            <form>
                <fieldset>
                <legend>New Pet</legend>

                <label>
                    Name: <input name="name" />
                </label>

                <label>
                    Age: <input name="age" />
                </label>

                <label>
                    Breed: <input name="breed" />
                </label>

                <button>Add</button>
                </fieldset>
            </form>
        </>

    )
    
}
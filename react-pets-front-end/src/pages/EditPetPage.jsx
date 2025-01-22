

export default function EditPetPage() {

    return (
        <>
            <form>
                <fieldset>
                <legend>Edit Pet</legend>

                <label>
                    Name: <input name="name" />
                </label>

                <label>
                    Age: <input name="age" />
                </label>

                <label>
                    Breed: <input name="breed" />
                </label>

                <button>Edit</button>
                </fieldset>
            </form>
        </>

    )

}
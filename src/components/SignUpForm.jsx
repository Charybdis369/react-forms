import {useState} from 'react'

function SignUpForm() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault()
        setToken(result.token);
        
        
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup')
            const json = await response.json()
            console.log(json)
        } catch(err) {
           setError(error.message)
        }
    }

    return (
        <>
        <h2>Sign Up!</h2>

        <form>
            <label>
                Username: <input value={username} onChange={(e) => setUserName(e.target.value)}></input>
            </label>
            <label>
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default SignUpForm
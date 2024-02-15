import {useState} from "react";
import useWebSocket from "../customHook/useWebSocket.ts";
import {useDispatch} from "react-redux";
import {setUsername as sliceSetUsername} from "../store/Slices/usernameSlice.ts";

export default function EnterUsername() {
    const [username, setUsername] = useState<string>("")
    const dispatch = useDispatch()
    const {connect} = useWebSocket()
  return (
    <>
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  onSubmitCapture={(e) => {
                      e.preventDefault()
                      dispatch(sliceSetUsername(username))
                      connect(username)
                  }}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Enter your name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        >
                        Join Chat
                    </button>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    </>
  )
}
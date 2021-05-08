export default function Button(props) {

  return (
    <div>
      <h2>Register</h2>
      <form action="POST">
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
      </form>
    </div>
  )

}
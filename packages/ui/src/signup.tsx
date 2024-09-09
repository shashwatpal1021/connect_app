

export const Signup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Hey there! Welcome</h1>
      {children}
      <br />
      <label htmlFor="email">Email: <input type="text" name="email" id="email" /></label>
      <label htmlFor="createpassword">Create Password: <input type="text" name="createpassword" id="createpassword" /></label>
      <label htmlFor="confirmpassword">Confirm Password: <input type="text" name="confirmpassword" id="confirmpassword" /></label>
      <button type="submit">Submit</button>
    </div>
  );
};

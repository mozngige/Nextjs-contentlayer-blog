"use client"

import { useForm } from "react-hook-form";
const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("me");
  console.log(errors);

  return (
    <Footer>
      <h3>Interesting Stories | Updates | Guides</h3>
      <p>
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />

        <input type="submit" />
      </form>
    </Footer>
  );
};
export default Footer
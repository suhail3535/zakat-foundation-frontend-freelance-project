import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Footer () {
  const navigate = useNavigate();

  return (
    <footer>
      <p>
        <span>
          Copyright &copy; 2024 As Foundation - all rights reserved. Technical
          support by Q D.
        </span>
        <span style={{ marginTop: "1rem" }}>
          <Link to={"/term"}> <a href="">Terms and conditions</a></Link>    | <Link to={"/privacy"}><a href="">Privacy Policy</a></Link>
        </span>
      </p>
    </footer>
  );
}

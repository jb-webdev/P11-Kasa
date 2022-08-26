import React from 'react'
import { Link } from "react-router-dom"
import "./ErrorPage.css"

function ErrorPage() {
  return (
    <div id="errorPage-component">
        <p id="errorPage-texte">404</p>
        <h1 id="errorPage-title">Oups ! La page que vous demandez n'éxiste pas</h1>
        <Link id="errorPage-link" to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default ErrorPage
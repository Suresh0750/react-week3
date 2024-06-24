# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



// installation

"npm i @reduxjs/toolkit react-redux " //* react-redux using for connect out react and redux


npm i react-router-dom // * using for route


Redux has two thing ,first one store and seconde one slice

Redux store : multiple redux state data available . Each state has slice file

Redux slice : slice has two things action and reducer . reducer is function which is two update state throug the action only we can access the reducer funtion.


how to connect redux and react : usign react-redux

main file :
        we using Provider and store
    how to access : 
    const variable = useSelctor()  // it is came from react-redux
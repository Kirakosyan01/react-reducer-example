import React, { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import UsersPage from "../pages/UsersPage/UsersPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import UserSinglePage from "../pages/UserSinglePage/UserSinglePage";
import ProductSinglePage from "../pages/ProductSinglePage/ProductSinglePage";

export default function AppRouter() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setUsers":
        return {
          ...state,
          usersData: action.payload,
        };
      case "setProducts":
        return {
          ...state,
          productsData: action.payload,
        };
      case "deleteUser":
        return {
          ...state,
          usersData: state.usersData.filter(
            (user) => user.cell !== action.payload
          ),
        };
      case "deleteProduct":
        return {
          ...state,
          productsData: state.productsData.filter(
            (product) => product.id !== action.payload
          ),
        };
      case "productUpdate":
        return {
          ...state,
          productsData: state.productsData.map((product) => {
            if (product.id === action.id) {
              return {
                ...product,
                title: action.payload[0],
                category: action.payload[1],
                price: action.payload[2],
                rating: { ...product.rating, rate: action.payload[3] },
              };
            } else {
              return product;
            }
          }),
        };
      case "userUpdate":
        return {
          ...state,
          usersData: state.usersData.map((user) => {
            if (user.cell === action.id) {
              return {
                ...user,
                name: {
                  ...user.name,
                  title: action.payload[0],
                  first: action.payload[1],
                  last: action.payload[2],
                },
                dob: {
                  ...user.dob,
                  age: action.payload[3],
                },
                gender: action.payload[4],
                email: action.payload[5],
                phone: action.payload[6],
                location: {
                  ...user.location,
                  country: action.payload[7],
                },
              };
            } else {
              return user;
            }
          }),
        };
      case "sortProductsByPrice":
        return {
          ...state,
          productsData: state.productsData.sort((a, b) => a.price - b.price),
        };
      case "sortProductsByRating":
        return {
          ...state,
          productsData: state.productsData.sort((a, b) => a.rating.rate - b.rating.rate),
        };
      case "sortUsersByPrice":
        return {
          ...state,
          usersData: state.usersData.sort((a, b) => a.dob.age - b.dob.age)
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    usersData: [],
    productsData: [],
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const storedUsers = localStorage.getItem("usersData");

      if (storedUsers) {
        dispatch({ type: "setUsers", payload: JSON.parse(storedUsers) });
      } else {
        try {
          const response = await fetch("https://randomuser.me/api/?results=30");
          const data = await response.json();
          dispatch({ type: "setUsers", payload: data.results });
          localStorage.setItem("usersData", JSON.stringify(data.results));
        } catch (error) {
          console.log(error);
        }
      }
    };

    const fetchProducts = async () => {
      const storedProducts = localStorage.getItem("productsData");

      if (storedProducts) {
        dispatch({ type: "setProducts", payload: JSON.parse(storedProducts) });
      } else {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          dispatch({ type: "setProducts", payload: data });
          localStorage.setItem("productsData", JSON.stringify(data));
        } catch (error) {
          console.log(error);
        }
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchUsers(), fetchProducts()]);
    };

    fetchData();
  }, []);

  console.log(state);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="products/:id"
          element={
            <ProductSinglePage
              dispatch={dispatch}
              productsData={state.productsData}
            />
          }
        />
        <Route
          path="users/:id"
          element={
            <UserSinglePage dispatch={dispatch} usersData={state.usersData} />
          }
        />
        <Route index element={<HomePage />} />
        <Route
          path="users"
          element={
            <UsersPage usersData={state.usersData} dispatch={dispatch} />
          }
        />
        <Route
          path="products"
          element={
            <ProductsPage
              productsData={state.productsData}
              dispatch={dispatch}
            />
          }
        />
      </Route>
    </Routes>
  );
}

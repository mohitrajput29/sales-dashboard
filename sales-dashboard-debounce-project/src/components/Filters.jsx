import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  setSearch,
  setCategory
} from "../features/sales/salesSlice";

import {
  useState,
  useEffect
} from "react";

import useDebounce
from "../hooks/useDebounce";

export default function Filters() {

  const dispatch =
    useDispatch();

  const { category } =
    useSelector(
      state => state.sales
    );

  const [inputValue,
    setInputValue] =
      useState("");

  const debouncedSearch =
    useDebounce(
      inputValue,
      500
    );

  useEffect(() => {

    dispatch(
      setSearch(debouncedSearch)
    );

  }, [debouncedSearch,
      dispatch]);

  return (

    <div
      style={{
        marginBottom: "20px"
      }}
    >

      <input
        type="text"
        placeholder="Search Product"
        value={inputValue}
        onChange={(e) =>
          setInputValue(
            e.target.value
          )
        }
        style={{
          padding: "10px",
          marginRight: "10px"
        }}
      />

      <select
        value={category}
        onChange={(e) =>
          dispatch(
            setCategory(
              e.target.value
            )
          )
        }
        style={{
          padding: "10px"
        }}
      >

        <option>All</option>
        <option>Fashion</option>
        <option>Electronics</option>

      </select>

    </div>
  );
}
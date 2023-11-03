import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

function dataFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("unsplashDAta")) || {
      mode: "light",
      likedImage: [],
    }
  );
}

const changeState = (state, action) => {
  switch (action.type) {
    case "ADD_LIKED_IMAGE":
      return { ...state, likedImage: [...state.likedImages, action.payload] };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, dataFromLocalStorage());

  const addNewImage = (newImage) => {
    const isImageAlready = state.likedImage.every((image) => {
      return image.id !== newImage.id;
    });

    if (isImageAlready) {
      dispatch({ type: "ADD_LIKED_IMAGE", payload: newImage });
    }
  };

  useEffect(() => {
    localStorage.setItem("unsplashData", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, addNewImage }}>
      {children}
    </GlobalContext.Provider>
  );
}

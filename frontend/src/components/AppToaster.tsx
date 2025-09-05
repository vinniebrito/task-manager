import { Toaster } from "react-hot-toast";

const AppToaster = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        success: {
          style: {
            background: "var(--color-toast-success)",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "var(--color-toast-error)",
            color: "#fff",
          },
        },
        loading: {
          style: {
            background: "var(--color-toast-info)",
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default AppToaster;

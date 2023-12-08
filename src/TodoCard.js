export const TodoCard = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 10px",
        borderRadius: "8px",
        margin: "5px 10px",
      }}
    >
      <p>{text}</p>
      <button
        style={{
          border: "none",
          backgroundColor: "transparent",
          color: "#FF0000",
          cursor: "pointer",
        }}
      >
        削除
      </button>
    </div>
  );
};

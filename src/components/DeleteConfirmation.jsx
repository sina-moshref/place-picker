import { useEffect } from "react";
import { ProgressBar } from "./ProgressBar";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("tt");
    const Timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      console.log("Timer c");
      clearTimeout(Timer);
    };
  }, [onConfirm]);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={3000} />
    </div>
  );
}

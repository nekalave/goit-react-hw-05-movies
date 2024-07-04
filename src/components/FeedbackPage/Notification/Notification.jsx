const Notification = ({ message, total, children}) => (
  <>
  {total === 0 ? (
      <div>{message}</div>
    ) : (
    children
    )}
  </>
);

export default Notification;

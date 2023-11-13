const ListWhyUs = (props) => {
  return (
    <div id="list-card">
      <div className="wraper">
        <div className="card">
          <div className="card-body">
            <i>{props.icon}</i>
            <p>{props.title}</p>
            <span>{props.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListWhyUs;

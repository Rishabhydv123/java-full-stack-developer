export const Data = ({ props }) => {
  const { data } = props;
  console.log('🚀 ~ data:', data);

  return (
    <>
      {data &&
        data?.map((el) => {
          return (
            <div key={el.id}>
              <h2>{el.id}</h2>
              <h1>{el.title}</h1>
              <h3>{el.completed ? 'true' : 'false'}</h3>
            </div>
          );
        })}
    </>
  );
};

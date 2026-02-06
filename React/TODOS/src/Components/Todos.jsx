export const Todos = ({ props }) => {
  const { todo } = props;

  console.log('🚀 ~ todo: in list comp', todo);

  return (
    <>
      <h1>list of todos</h1>
    </>
  );
};

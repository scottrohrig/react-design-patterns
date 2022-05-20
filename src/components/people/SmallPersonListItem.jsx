// notice that this small person list item doesn't
// really contain any styling that would indicate
// it knows where it's being displayed. In other words,
// we could display the small person list item in a
// numbered list, in a very narrow list, in a very
// wide list, and we could use the styling in its
// parent component to determine how it gets displayed

export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age: {age} years{" "}
    </p>
  );
};

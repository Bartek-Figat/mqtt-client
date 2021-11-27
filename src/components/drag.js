<Droppable droppableId="droppable-1">
{(provided, snapshot) => (
  <ul
  ref={provided.innerRef}
  style={{
    backgroundColor: snapshot.isDragging ? 'green' : 'lightblue',
  }}
  {...provided.droppableProps}
  >
    {sideIcons.map(({ id, content }, index) => {
      return (
        <Draggable
      // adding a key is important!
      key={id}
      draggableId={`${id}`}
      index={index}
    >
          {(provided, snapshot) => (
            <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
              className="flex justify-center text-8xl p-1 hover:bg-gray-800 hover:text-white cursor-pointer w-full"
            >
              {content}
            </div>
          )}
        </Draggable>
      );
    })}
    {provided.placeholder}
  </ul>
)}
</Droppable>

  <Droppable droppableId="list">
  {(provided, snapshot) => (
    <ul
      ref={provided.innerRef}
      style={{
        backgroundColor: snapshot.isDragging ? 'green' : 'lightblue',
      }}
      {...provided.droppableProps}
    >
        {
 items.map((item, index) => (
    <Draggable
      // adding a key is important!
      key={item.id}
      draggableId={item.id}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </div>
      )}
    </Draggable>
  ));
        }
      {provided.placeholder}
    </ul>
  )}
</Droppable>
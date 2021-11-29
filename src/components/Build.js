import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';
import { WrappMain, WrappSideBar, WrappContent } from "./WrapComponents";
import SideBar from "./SideBar";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import { AiOutlineBarChart } from "react-icons/ai";
import { GiChemicalTank, GiWaterTank } from "react-icons/gi";
import { FiSettings, FiTool } from "react-icons/fi";

const sideIcons = [
  { id: uuidv4(), content: <GiWaterTank /> },
  { id: uuidv4(), content: <AiOutlineBarChart /> },
  { id: uuidv4(), content: <GiChemicalTank /> },
  { id: uuidv4(), content: <FiSettings /> },
  { id: uuidv4(), content: <FiTool /> },
];

function Build() {
  const [icons, setIcons] = useState(sideIcons);

  const handleOnDragEnd = ({ destination, source }) => {
    console.log(destination);
    if (!destination) return;
    const result = Array.from(icons);
    const [removed] = result.splice(source.index, 1);
    result.splice(destination.index, 0, removed);
    setIcons(result);
  };

  return (
    <WrappMain>
      <WrappSideBar>
        <SideBar />
      </WrappSideBar>
      <WrappContent>
        <WelcomeBanner />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="flex w-full h-full">
            <div className="flex w-10/12 h-full dot"></div>
            <div className="flex flex-col  m-auto w-2/12 h-full">
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <ul ref={provided.innerRef}  {...provided.droppableProps}>
                    {icons.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex justify-center text-8xl p-1 hover:bg-gray-800 hover:text-white cursor-pointer w-full"
                          >
                            {item.content}
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          </div>
        </DragDropContext>
      </WrappContent>
    </WrappMain>
  );
}

export default Build;

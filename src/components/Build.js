import React, { useState, useRef, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { WrappMain, WrappSideBar, WrappContent } from "./WrapComponents";
import SideBar from "./SideBar";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaChartArea } from "react-icons/fa";
import { GiChemicalTank, GiWaterTank } from "react-icons/gi";
import { FiSettings, FiTool } from "react-icons/fi";
import {
  FcDownLeft,
  FcDownRight,
  FcDown,
  FcLeftDown,
  FcLeftDown2,
} from "react-icons/fc";

const sideIcons = [
  { id: 1, content: <GiWaterTank /> },
  { id: 2, content: <AiOutlineBarChart /> },
  { id: 3, content: <GiChemicalTank /> },
  { id: 4, content: <FiSettings /> },
  { id: 5, content: <FiTool /> },
];
// #727aa3
function Build() {
  const [icons, updateIcons] = useState(sideIcons);

  const  handleOnDragEnd = ({destination, source, draggableId}) =>  {
    
    console.log("element", destination.index);
    console.log("source",source);
    console.log("draggableId",draggableId);

    if(!destination) return;
    if(destination.draggableId === source.draggableId && destination.index === source.index) return;
    const items = Array.from(icons);
    items.splice(source.index, 1);
    items.splice(destination.index, 0, draggableId);
    updateIcons(items);
    console.log(items)
  }
  return (
    <WrappMain>
      <WrappSideBar>
        <SideBar />
      </WrappSideBar>
      <WrappContent>
        <WelcomeBanner />
        <div className="flex w-full h-full">
          
            <div className="flex w-10/12 h-full dot"></div>
            <div className="flex flex-col  m-auto w-2/12 h-full">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="droppable-1">
                {(provided, snapshot) => (
                  <ul
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDragging
                        ? "green"
                        : "lightblue",
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
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="flex justify-center text-8xl p-1 hover:bg-gray-800 hover:text-white cursor-pointer w-full"
                            >
                              {content}
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
              </DragDropContext>
            </div>
        </div>
      </WrappContent>
    </WrappMain>
  );
}

export default Build;

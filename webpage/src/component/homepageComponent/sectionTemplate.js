import React from "react";
import { useState, useEffect } from "react";

//This creates the section;
//sectionName - the name of the section
//sectionElement - the elements you want in cards of this section
//updateResume
//allowAddForm - Is this section allowed to add addition cards

export default function SectionTemplate(
  sectionName,
  sectionElement,
  updateResume,
  allowAddForm = false
) {
  const [objectId, setObjectId] = useState(0);

  //setState - adds the card in to the state const array
  const [state, setState] = useState([]);

  // Run the effect only once, when addObject() is called.
  useEffect(() => {
    addObject();
  }, []);

  // Creates an empty card
  //objectID - the ID of the current card
  //
  function createEmptyObject() {
    const updatedSectionElement = sectionElement.map((element) => ({
      ...element,
      input: null,
    }));

    const stateObject = {
      id: objectId,
      readOnly: false,
      sectionElement: updatedSectionElement,
    };

    setObjectId(objectId + 1);

    return stateObject;
  }

  //runs the creatEmptyObject function and addes it to the state array.
  //updates the resumes object in homepage with this new card.
  function addObject() {
    setState([...state, createEmptyObject()]);
    updateResume(state, sectionName);
  }

  //deletes the selected object
  //filters the state with ojects other than the ID
  //updates the resume object in the homepage with the state with the deleted card.
  function deleteObject(e) {
    const id = e.target.parentElement.id;
    setState(state.filter((object) => object.id != id));
    updateResume(state, sectionName);
  }

  //updates the content of each card and update it to the resume object
  function updateState(e) {
    let value = e.target.value;
    let categoryId = e.target.parentElement.parentElement.id;
    let sectionId = parseInt(
      e.target.parentElement.parentElement.parentElement.parentElement.id
    );

    setState((prevState) => {
      return prevState.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            sectionElement: section.sectionElement.map((element) => {
              if (element.category === categoryId) {
                return {
                  ...element,
                  input: value,
                };
              }
              return element;
            }),
          };
        }
        return section;
      });
    });
    updateResume(state, sectionName);
  }

  const listItems = state.map((section) => (
    <li key={section.id} id={section.id}>
      <ul>
        {section.sectionElement.map((element) => (
          <li id={element.category} key={element.category}>
            <label className="categories">
              <p className="category_text">{element.category}</p>
              <input
                type={element.type}
                readOnly={section.readOnly}
                onChange={updateState}
              />
            </label>
          </li>
        ))}
      </ul>
      {allowAddForm && (
        <button className="Button" onClick={deleteObject}>
          Delete
        </button>
      )}
    </li>
  ));

  return (
    <div className="section">
      <h1 className="subtitle">{sectionName}</h1>
      <div className="Input">
        <ul>{listItems}</ul>
        {allowAddForm && (
          <button className="Button" onClick={addObject}>
            {" "}
            Add{" "}
          </button>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #ae0000;
  color: #fff;
`;

class Item extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.item.id} index={this.props.index}>
        {provided => (
          <Container 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            // video shows innerRef. should be ref
            ref={provided.innerRef}
          >
            {this.props.item.content}
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Item;
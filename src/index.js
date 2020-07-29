import React from 'react';
import ReactDOM from 'react-dom';

import { DragDropContext} from 'react-beautiful-dnd';

import initialData from './initial-data';
import Column from './Column';

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      // the user dropped it in the same place
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newItemIds = Array.from(column.itemIds);
    newItemIds.splice(source.index, 1);
    newItemIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      itemIds: newItemIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      }
    }

    this.setState(newState);
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
        
          const column = this.state.columns[columnId];
          const items = column.itemIds.map(itemId => this.state.items[itemId]);

          return <Column key={column.id} column={column} items={items} />;
        })}
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

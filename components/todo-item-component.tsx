import Link from 'next/link';
import { ChangeEventHandler, FC, useEffect, useState } from 'react';

import { Todo } from '../types';

type Props = {
  item: Todo;
  setCompleted?: (id: number, completed: boolean) => void;
  deleteItem?: (id: number) => void;
  selected?: boolean;
};

export const TodoItemComponent: FC<Props> = (props) => {
  const {
    item: { completed, id, title },
    setCompleted,
    deleteItem,
    selected,
  } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => {
      console.log(`unmount${id}`);
    };
  }, [setVisible, id]);

  const switchCompleted: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.checked);
    setCompleted?.(id, e.target.checked);
  };

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: 'ease-in-out',
        padding: '18',
        background: selected ? 'gray' : 'transparent',
      }}
    >
      <span>
        <Link href={`/todo/${id}`}>{title}</Link>
      </span>
      <input type="checkbox" checked={completed} onChange={switchCompleted} />
      <button type="button" onClick={() => deleteItem?.(id)}>
        Delete
      </button>
    </div>
  );
};

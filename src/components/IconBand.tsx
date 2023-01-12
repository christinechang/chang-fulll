import { ReactElement, MouseEventHandler } from "react";

interface IconBandType {
  checkCount: number;
  checkAll: boolean;
  editMode: boolean;
  handleDupe: MouseEventHandler<HTMLButtonElement>;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
  handleCheckAll: MouseEventHandler<HTMLButtonElement>;
  handleEdit: MouseEventHandler<HTMLButtonElement>;
}

const IconBand = ({
  checkCount,
  checkAll,
  editMode,
  handleDupe,
  handleDelete,
  handleCheckAll,
  handleEdit,
}: IconBandType): ReactElement => {
  const colorIcon = checkAll ? { background: "#00a1ff" } : {};
  return (
    <div className="flexSpaceBetween iconBand" data-testid="iconBand">
      <div className={`flexSpaceBetween ${editMode ? '' : 'hideNoEdit'}`}>
        <button onClick={handleCheckAll} data-testid="checkAll">
          <i className={`fa-regular fa-square-minus`} style={colorIcon}></i>
        </button>
        <span className="iconBand__text">{checkCount} elements selected</span>
      </div>
      <div className="flexSpaceBetween">
        <button onClick={handleDupe} className={editMode ? '' : 'hideNoEdit'}>
          <i className="fa-regular fa-clone"></i>
        </button>
        <button onClick={handleDelete} className={editMode ? '' : 'hideNoEdit'}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <button onClick={handleEdit}>
          <i className="fa-regular fa-edit"></i>
        </button>
      </div>
    </div>
  );
};

export default IconBand;

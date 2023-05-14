import Button from "../../atoms/Button/Button";
import { PaginationProps } from "./Pagination.interface";

const TITLE_BUTTON_NEXT: string = "Siguiente";
const TITLE_BUTTON_PREVIEW: string = "Anterior";

const Pagination = (props: PaginationProps) => {
  const { numPage, updateCurrentPage } = props;

  const goToNextPage = (page: number): void => {
    page = numPage + 1;
    updateCurrentPage(page);
  };
  const goToPrePage = (page:number): void => {
    page = numPage - 1;
    updateCurrentPage(page);
  };


  return (
    <div>
      
      <Button
        title={TITLE_BUTTON_PREVIEW}
        onClickButton={() => {
          goToPrePage(numPage);
        }}
      />
      {props.children}
      <Button
        title={TITLE_BUTTON_NEXT}
        onClickButton={() => {
          goToNextPage(numPage);
        }}
      />
    </div>
  );
};

export default Pagination;

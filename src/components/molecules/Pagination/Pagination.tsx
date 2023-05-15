import Button from "../../atoms/Button/Button";
import { PaginationProps } from "./Pagination.interface";

const TITLE_BUTTON_NEXT: string = "Next";
const TITLE_BUTTON_PREVIEW: string = "Previous";
const INITIAL_PAGE: number = 1;
const FINAL_PAGE: number = 13;

const Pagination = (props: PaginationProps) => {
  const { numPage, updateCurrentPage } = props;

  let disabledButtonPrevious: boolean = false;
  let disabledButtonNext: boolean = false;

  if (numPage === INITIAL_PAGE) {
    disabledButtonPrevious = true;
  }
  if (numPage === FINAL_PAGE) {
    disabledButtonNext = true;
  }

  const goToNextPage = (page: number): void => {
    page = numPage + 1;
    updateCurrentPage(page);
  };
  const goToPrePage = (page: number): void => {
    page = numPage - 1;
    updateCurrentPage(page);
  };

  return (
    <div>
      {!disabledButtonPrevious && (
        <Button
          isDisabled={disabledButtonPrevious}
          title={TITLE_BUTTON_PREVIEW}
          onClickButton={() => {
            goToPrePage(numPage);
          }}
        />
      )}
      {props.children}
      {!disabledButtonNext && (
        <Button
          isDisabled={disabledButtonNext}
          title={TITLE_BUTTON_NEXT}
          onClickButton={() => {
            goToNextPage(numPage);
          }}
        />
      )}
    </div>
  );
};

export default Pagination;

import Button from "../../atoms/Button/Button";
import { PaginationProps } from "./Pagination.interface";

const TITLE_BUTTON_NEXT: string = "Siguiente";
const TITLE_BUTTON_PREVIEW: string = "Anterior";

const Pagination = (props: PaginationProps) => {
  let { currentPage } = props;

  const goToNextPage = (): void => {
    currentPage = currentPage + 1;
    console.log("***esto vale page", currentPage);
  };
  const goToPrePage = (): void => {
    currentPage = currentPage - 1;
    console.log("***esto vale page", currentPage);
  };

  return (
    <div>
      <Button
        title={TITLE_BUTTON_PREVIEW}
        onClickButton={() => {
          goToPrePage();
        }}
      />
      <Button
        title={TITLE_BUTTON_NEXT}
        onClickButton={() => {
          goToNextPage();
        }}
      />
    </div>
  );
};

export default Pagination;

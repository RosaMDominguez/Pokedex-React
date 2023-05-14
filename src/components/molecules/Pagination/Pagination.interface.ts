export interface PaginationProps {
    numPage: number;
    updateCurrentPage:(page:number) => void;
    children: React.ReactNode;
}
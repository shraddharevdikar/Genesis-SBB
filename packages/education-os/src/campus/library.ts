import { StudentId } from '../students/student.js';

export interface LibraryBookLoan {
  readonly loanId: string;
  readonly associatedStudentId: StudentId;
  readonly bookIsbnCodeString: string;
  readonly bookTitleString: string;
  readonly checkoutDate: Date;
  readonly dueDate: Date;
  readonly actualReturnedDate?: Date;
  readonly outstandingFineAmount: number; // e.g. $5.00 fine for late return (links to FinanceOS)
}

export interface Library {
  readonly libraryId: string;
  readonly uniqueLibraryCode: string; // e.g., "LIB-ZURICH-MAIN"
  readonly associatedCampusIdString: string; // Links to Campus
  readonly libraryDisplayName: string;
  readonly totalCatalogedItemsCount: number;
  readonly activeBookLoansList: LibraryBookLoan[];
  readonly maximumBorrowLimitPerStudent: number; // e.g. 10 books
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}

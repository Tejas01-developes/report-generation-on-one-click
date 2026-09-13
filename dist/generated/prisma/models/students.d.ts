import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model students
 *
 */
export type studentsModel = runtime.Types.Result.DefaultSelection<Prisma.$studentsPayload>;
export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null;
    _avg: StudentsAvgAggregateOutputType | null;
    _sum: StudentsSumAggregateOutputType | null;
    _min: StudentsMinAggregateOutputType | null;
    _max: StudentsMaxAggregateOutputType | null;
};
export type StudentsAvgAggregateOutputType = {
    rollNo: number | null;
    english: number | null;
    maths: number | null;
    hindi: number | null;
    gujarati: number | null;
    computer: number | null;
    ss: number | null;
    science: number | null;
    totalMarks: number | null;
};
export type StudentsSumAggregateOutputType = {
    rollNo: number | null;
    english: number | null;
    maths: number | null;
    hindi: number | null;
    gujarati: number | null;
    computer: number | null;
    ss: number | null;
    science: number | null;
    totalMarks: number | null;
};
export type StudentsMinAggregateOutputType = {
    id: string | null;
    rollNo: number | null;
    firstName: string | null;
    lastName: string | null;
    class: string | null;
    section: string | null;
    phoneNo: string | null;
    english: number | null;
    maths: number | null;
    hindi: number | null;
    gujarati: number | null;
    computer: number | null;
    ss: number | null;
    science: number | null;
    totalMarks: number | null;
    grade: string | null;
    isPass: boolean | null;
    fileUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentsMaxAggregateOutputType = {
    id: string | null;
    rollNo: number | null;
    firstName: string | null;
    lastName: string | null;
    class: string | null;
    section: string | null;
    phoneNo: string | null;
    english: number | null;
    maths: number | null;
    hindi: number | null;
    gujarati: number | null;
    computer: number | null;
    ss: number | null;
    science: number | null;
    totalMarks: number | null;
    grade: string | null;
    isPass: boolean | null;
    fileUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentsCountAggregateOutputType = {
    id: number;
    rollNo: number;
    firstName: number;
    lastName: number;
    class: number;
    section: number;
    phoneNo: number;
    english: number;
    maths: number;
    hindi: number;
    gujarati: number;
    computer: number;
    ss: number;
    science: number;
    totalMarks: number;
    grade: number;
    isPass: number;
    fileUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StudentsAvgAggregateInputType = {
    rollNo?: true;
    english?: true;
    maths?: true;
    hindi?: true;
    gujarati?: true;
    computer?: true;
    ss?: true;
    science?: true;
    totalMarks?: true;
};
export type StudentsSumAggregateInputType = {
    rollNo?: true;
    english?: true;
    maths?: true;
    hindi?: true;
    gujarati?: true;
    computer?: true;
    ss?: true;
    science?: true;
    totalMarks?: true;
};
export type StudentsMinAggregateInputType = {
    id?: true;
    rollNo?: true;
    firstName?: true;
    lastName?: true;
    class?: true;
    section?: true;
    phoneNo?: true;
    english?: true;
    maths?: true;
    hindi?: true;
    gujarati?: true;
    computer?: true;
    ss?: true;
    science?: true;
    totalMarks?: true;
    grade?: true;
    isPass?: true;
    fileUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentsMaxAggregateInputType = {
    id?: true;
    rollNo?: true;
    firstName?: true;
    lastName?: true;
    class?: true;
    section?: true;
    phoneNo?: true;
    english?: true;
    maths?: true;
    hindi?: true;
    gujarati?: true;
    computer?: true;
    ss?: true;
    science?: true;
    totalMarks?: true;
    grade?: true;
    isPass?: true;
    fileUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentsCountAggregateInputType = {
    id?: true;
    rollNo?: true;
    firstName?: true;
    lastName?: true;
    class?: true;
    section?: true;
    phoneNo?: true;
    english?: true;
    maths?: true;
    hindi?: true;
    gujarati?: true;
    computer?: true;
    ss?: true;
    science?: true;
    totalMarks?: true;
    grade?: true;
    isPass?: true;
    fileUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StudentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which students to aggregate.
     */
    where?: Prisma.studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: Prisma.studentsOrderByWithRelationInput | Prisma.studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned students
    **/
    _count?: true | StudentsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType;
};
export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
    [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudents[P]> : Prisma.GetScalarType<T[P], AggregateStudents[P]>;
};
export type studentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.studentsWhereInput;
    orderBy?: Prisma.studentsOrderByWithAggregationInput | Prisma.studentsOrderByWithAggregationInput[];
    by: Prisma.StudentsScalarFieldEnum[] | Prisma.StudentsScalarFieldEnum;
    having?: Prisma.studentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentsCountAggregateInputType | true;
    _avg?: StudentsAvgAggregateInputType;
    _sum?: StudentsSumAggregateInputType;
    _min?: StudentsMinAggregateInputType;
    _max?: StudentsMaxAggregateInputType;
};
export type StudentsGroupByOutputType = {
    id: string;
    rollNo: number;
    firstName: string;
    lastName: string;
    class: string;
    section: string;
    phoneNo: string;
    english: number;
    maths: number;
    hindi: number;
    gujarati: number;
    computer: number;
    ss: number;
    science: number;
    totalMarks: number | null;
    grade: string | null;
    isPass: boolean | null;
    fileUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: StudentsCountAggregateOutputType | null;
    _avg: StudentsAvgAggregateOutputType | null;
    _sum: StudentsSumAggregateOutputType | null;
    _min: StudentsMinAggregateOutputType | null;
    _max: StudentsMaxAggregateOutputType | null;
};
export type GetStudentsGroupByPayload<T extends studentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentsGroupByOutputType[P]>;
}>>;
export type studentsWhereInput = {
    AND?: Prisma.studentsWhereInput | Prisma.studentsWhereInput[];
    OR?: Prisma.studentsWhereInput[];
    NOT?: Prisma.studentsWhereInput | Prisma.studentsWhereInput[];
    id?: Prisma.StringFilter<"students"> | string;
    rollNo?: Prisma.IntFilter<"students"> | number;
    firstName?: Prisma.StringFilter<"students"> | string;
    lastName?: Prisma.StringFilter<"students"> | string;
    class?: Prisma.StringFilter<"students"> | string;
    section?: Prisma.StringFilter<"students"> | string;
    phoneNo?: Prisma.StringFilter<"students"> | string;
    english?: Prisma.IntFilter<"students"> | number;
    maths?: Prisma.IntFilter<"students"> | number;
    hindi?: Prisma.IntFilter<"students"> | number;
    gujarati?: Prisma.IntFilter<"students"> | number;
    computer?: Prisma.IntFilter<"students"> | number;
    ss?: Prisma.IntFilter<"students"> | number;
    science?: Prisma.IntFilter<"students"> | number;
    totalMarks?: Prisma.IntNullableFilter<"students"> | number | null;
    grade?: Prisma.StringNullableFilter<"students"> | string | null;
    isPass?: Prisma.BoolNullableFilter<"students"> | boolean | null;
    fileUrl?: Prisma.StringNullableFilter<"students"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"students"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"students"> | Date | string;
};
export type studentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rollNo?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    phoneNo?: Prisma.SortOrder;
    english?: Prisma.SortOrder;
    maths?: Prisma.SortOrder;
    hindi?: Prisma.SortOrder;
    gujarati?: Prisma.SortOrder;
    computer?: Prisma.SortOrder;
    ss?: Prisma.SortOrder;
    science?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    grade?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPass?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type studentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    rollNo?: number;
    AND?: Prisma.studentsWhereInput | Prisma.studentsWhereInput[];
    OR?: Prisma.studentsWhereInput[];
    NOT?: Prisma.studentsWhereInput | Prisma.studentsWhereInput[];
    firstName?: Prisma.StringFilter<"students"> | string;
    lastName?: Prisma.StringFilter<"students"> | string;
    class?: Prisma.StringFilter<"students"> | string;
    section?: Prisma.StringFilter<"students"> | string;
    phoneNo?: Prisma.StringFilter<"students"> | string;
    english?: Prisma.IntFilter<"students"> | number;
    maths?: Prisma.IntFilter<"students"> | number;
    hindi?: Prisma.IntFilter<"students"> | number;
    gujarati?: Prisma.IntFilter<"students"> | number;
    computer?: Prisma.IntFilter<"students"> | number;
    ss?: Prisma.IntFilter<"students"> | number;
    science?: Prisma.IntFilter<"students"> | number;
    totalMarks?: Prisma.IntNullableFilter<"students"> | number | null;
    grade?: Prisma.StringNullableFilter<"students"> | string | null;
    isPass?: Prisma.BoolNullableFilter<"students"> | boolean | null;
    fileUrl?: Prisma.StringNullableFilter<"students"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"students"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"students"> | Date | string;
}, "id" | "rollNo">;
export type studentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rollNo?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    phoneNo?: Prisma.SortOrder;
    english?: Prisma.SortOrder;
    maths?: Prisma.SortOrder;
    hindi?: Prisma.SortOrder;
    gujarati?: Prisma.SortOrder;
    computer?: Prisma.SortOrder;
    ss?: Prisma.SortOrder;
    science?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    grade?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPass?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.studentsCountOrderByAggregateInput;
    _avg?: Prisma.studentsAvgOrderByAggregateInput;
    _max?: Prisma.studentsMaxOrderByAggregateInput;
    _min?: Prisma.studentsMinOrderByAggregateInput;
    _sum?: Prisma.studentsSumOrderByAggregateInput;
};
export type studentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.studentsScalarWhereWithAggregatesInput | Prisma.studentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.studentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.studentsScalarWhereWithAggregatesInput | Prisma.studentsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"students"> | string;
    rollNo?: Prisma.IntWithAggregatesFilter<"students"> | number;
    firstName?: Prisma.StringWithAggregatesFilter<"students"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"students"> | string;
    class?: Prisma.StringWithAggregatesFilter<"students"> | string;
    section?: Prisma.StringWithAggregatesFilter<"students"> | string;
    phoneNo?: Prisma.StringWithAggregatesFilter<"students"> | string;
    english?: Prisma.IntWithAggregatesFilter<"students"> | number;
    maths?: Prisma.IntWithAggregatesFilter<"students"> | number;
    hindi?: Prisma.IntWithAggregatesFilter<"students"> | number;
    gujarati?: Prisma.IntWithAggregatesFilter<"students"> | number;
    computer?: Prisma.IntWithAggregatesFilter<"students"> | number;
    ss?: Prisma.IntWithAggregatesFilter<"students"> | number;
    science?: Prisma.IntWithAggregatesFilter<"students"> | number;
    totalMarks?: Prisma.IntNullableWithAggregatesFilter<"students"> | number | null;
    grade?: Prisma.StringNullableWithAggregatesFilter<"students"> | string | null;
    isPass?: Prisma.BoolNullableWithAggregatesFilter<"students"> | boolean | null;
    fileUrl?: Prisma.StringNullableWithAggregatesFilter<"students"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"students"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"students"> | Date | string;
};
export type studentsCreateInput = {
    id?: string;
    rollNo: number;
    firstName: string;
    lastName: string;
    class: string;
    section: string;
    phoneNo: string;
    english?: number;
    maths?: number;
    hindi?: number;
    gujarati?: number;
    computer?: number;
    ss?: number;
    science?: number;
    totalMarks?: number | null;
    grade?: string | null;
    isPass?: boolean | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type studentsUncheckedCreateInput = {
    id?: string;
    rollNo: number;
    firstName: string;
    lastName: string;
    class: string;
    section: string;
    phoneNo: string;
    english?: number;
    maths?: number;
    hindi?: number;
    gujarati?: number;
    computer?: number;
    ss?: number;
    science?: number;
    totalMarks?: number | null;
    grade?: string | null;
    isPass?: boolean | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type studentsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rollNo?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    section?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNo?: Prisma.StringFieldUpdateOperationsInput | string;
    english?: Prisma.IntFieldUpdateOperationsInput | number;
    maths?: Prisma.IntFieldUpdateOperationsInput | number;
    hindi?: Prisma.IntFieldUpdateOperationsInput | number;
    gujarati?: Prisma.IntFieldUpdateOperationsInput | number;
    computer?: Prisma.IntFieldUpdateOperationsInput | number;
    ss?: Prisma.IntFieldUpdateOperationsInput | number;
    science?: Prisma.IntFieldUpdateOperationsInput | number;
    totalMarks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPass?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type studentsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rollNo?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    section?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNo?: Prisma.StringFieldUpdateOperationsInput | string;
    english?: Prisma.IntFieldUpdateOperationsInput | number;
    maths?: Prisma.IntFieldUpdateOperationsInput | number;
    hindi?: Prisma.IntFieldUpdateOperationsInput | number;
    gujarati?: Prisma.IntFieldUpdateOperationsInput | number;
    computer?: Prisma.IntFieldUpdateOperationsInput | number;
    ss?: Prisma.IntFieldUpdateOperationsInput | number;
    science?: Prisma.IntFieldUpdateOperationsInput | number;
    totalMarks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPass?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type studentsCreateManyInput = {
    id?: string;
    rollNo: number;
    firstName: string;
    lastName: string;
    class: string;
    section: string;
    phoneNo: string;
    english?: number;
    maths?: number;
    hindi?: number;
    gujarati?: number;
    computer?: number;
    ss?: number;
    science?: number;
    totalMarks?: number | null;
    grade?: string | null;
    isPass?: boolean | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type studentsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rollNo?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    section?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNo?: Prisma.StringFieldUpdateOperationsInput | string;
    english?: Prisma.IntFieldUpdateOperationsInput | number;
    maths?: Prisma.IntFieldUpdateOperationsInput | number;
    hindi?: Prisma.IntFieldUpdateOperationsInput | number;
    gujarati?: Prisma.IntFieldUpdateOperationsInput | number;
    computer?: Prisma.IntFieldUpdateOperationsInput | number;
    ss?: Prisma.IntFieldUpdateOperationsInput | number;
    science?: Prisma.IntFieldUpdateOperationsInput | number;
    totalMarks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPass?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type studentsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rollNo?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    section?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNo?: Prisma.StringFieldUpdateOperationsInput | string;
    english?: Prisma.IntFieldUpdateOperationsInput | number;
    maths?: Prisma.IntFieldUpdateOperationsInput | number;
    hindi?: Prisma.IntFieldUpdateOperationsInput | number;
    gujarati?: Prisma.IntFieldUpdateOperationsInput | number;
    computer?: Prisma.IntFieldUpdateOperationsInput | number;
    ss?: Prisma.IntFieldUpdateOperationsInput | number;
    science?: Prisma.IntFieldUpdateOperationsInput | number;
    totalMarks?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPass?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type studentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rollNo?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    phoneNo?: Prisma.SortOrder;
    english?: Prisma.SortOrder;
    maths?: Prisma.SortOrder;
    hindi?: Prisma.SortOrder;
    gujarati?: Prisma.SortOrder;
    computer?: Prisma.SortOrder;
    ss?: Prisma.SortOrder;
    science?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    isPass?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type studentsAvgOrderByAggregateInput = {
    rollNo?: Prisma.SortOrder;
    english?: Prisma.SortOrder;
    maths?: Prisma.SortOrder;
    hindi?: Prisma.SortOrder;
    gujarati?: Prisma.SortOrder;
    computer?: Prisma.SortOrder;
    ss?: Prisma.SortOrder;
    science?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrder;
};
export type studentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rollNo?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    phoneNo?: Prisma.SortOrder;
    english?: Prisma.SortOrder;
    maths?: Prisma.SortOrder;
    hindi?: Prisma.SortOrder;
    gujarati?: Prisma.SortOrder;
    computer?: Prisma.SortOrder;
    ss?: Prisma.SortOrder;
    science?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    isPass?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type studentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rollNo?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    phoneNo?: Prisma.SortOrder;
    english?: Prisma.SortOrder;
    maths?: Prisma.SortOrder;
    hindi?: Prisma.SortOrder;
    gujarati?: Prisma.SortOrder;
    computer?: Prisma.SortOrder;
    ss?: Prisma.SortOrder;
    science?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    isPass?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type studentsSumOrderByAggregateInput = {
    rollNo?: Prisma.SortOrder;
    english?: Prisma.SortOrder;
    maths?: Prisma.SortOrder;
    hindi?: Prisma.SortOrder;
    gujarati?: Prisma.SortOrder;
    computer?: Prisma.SortOrder;
    ss?: Prisma.SortOrder;
    science?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type studentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rollNo?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    class?: boolean;
    section?: boolean;
    phoneNo?: boolean;
    english?: boolean;
    maths?: boolean;
    hindi?: boolean;
    gujarati?: boolean;
    computer?: boolean;
    ss?: boolean;
    science?: boolean;
    totalMarks?: boolean;
    grade?: boolean;
    isPass?: boolean;
    fileUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["students"]>;
export type studentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rollNo?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    class?: boolean;
    section?: boolean;
    phoneNo?: boolean;
    english?: boolean;
    maths?: boolean;
    hindi?: boolean;
    gujarati?: boolean;
    computer?: boolean;
    ss?: boolean;
    science?: boolean;
    totalMarks?: boolean;
    grade?: boolean;
    isPass?: boolean;
    fileUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["students"]>;
export type studentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rollNo?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    class?: boolean;
    section?: boolean;
    phoneNo?: boolean;
    english?: boolean;
    maths?: boolean;
    hindi?: boolean;
    gujarati?: boolean;
    computer?: boolean;
    ss?: boolean;
    science?: boolean;
    totalMarks?: boolean;
    grade?: boolean;
    isPass?: boolean;
    fileUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["students"]>;
export type studentsSelectScalar = {
    id?: boolean;
    rollNo?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    class?: boolean;
    section?: boolean;
    phoneNo?: boolean;
    english?: boolean;
    maths?: boolean;
    hindi?: boolean;
    gujarati?: boolean;
    computer?: boolean;
    ss?: boolean;
    science?: boolean;
    totalMarks?: boolean;
    grade?: boolean;
    isPass?: boolean;
    fileUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type studentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rollNo" | "firstName" | "lastName" | "class" | "section" | "phoneNo" | "english" | "maths" | "hindi" | "gujarati" | "computer" | "ss" | "science" | "totalMarks" | "grade" | "isPass" | "fileUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["students"]>;
export type $studentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "students";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        rollNo: number;
        firstName: string;
        lastName: string;
        class: string;
        section: string;
        phoneNo: string;
        english: number;
        maths: number;
        hindi: number;
        gujarati: number;
        computer: number;
        ss: number;
        science: number;
        totalMarks: number | null;
        grade: string | null;
        isPass: boolean | null;
        fileUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["students"]>;
    composites: {};
};
export type studentsGetPayload<S extends boolean | null | undefined | studentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$studentsPayload, S>;
export type studentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<studentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentsCountAggregateInputType | true;
};
export interface studentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['students'];
        meta: {
            name: 'students';
        };
    };
    /**
     * Find zero or one Students that matches the filter.
     * @param {studentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentsFindUniqueArgs>(args: Prisma.SelectSubset<T, studentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, studentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentsFindFirstArgs>(args?: Prisma.SelectSubset<T, studentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, studentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     *
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     *
     */
    findMany<T extends studentsFindManyArgs>(args?: Prisma.SelectSubset<T, studentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Students.
     * @param {studentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     *
     */
    create<T extends studentsCreateArgs>(args: Prisma.SelectSubset<T, studentsCreateArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Students.
     * @param {studentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends studentsCreateManyArgs>(args?: Prisma.SelectSubset<T, studentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentsCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends studentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, studentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Students.
     * @param {studentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     *
     */
    delete<T extends studentsDeleteArgs>(args: Prisma.SelectSubset<T, studentsDeleteArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Students.
     * @param {studentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends studentsUpdateArgs>(args: Prisma.SelectSubset<T, studentsUpdateArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Students.
     * @param {studentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends studentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, studentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends studentsUpdateManyArgs>(args: Prisma.SelectSubset<T, studentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentsUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends studentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, studentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Students.
     * @param {studentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends studentsUpsertArgs>(args: Prisma.SelectSubset<T, studentsUpsertArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentsCountArgs>(args?: Prisma.Subset<T, studentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentsAggregateArgs>(args: Prisma.Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>;
    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends studentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: studentsGroupByArgs['orderBy'];
    } : {
        orderBy?: studentsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the students model
     */
    readonly fields: studentsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for students.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__studentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the students model
 */
export interface studentsFieldRefs {
    readonly id: Prisma.FieldRef<"students", 'String'>;
    readonly rollNo: Prisma.FieldRef<"students", 'Int'>;
    readonly firstName: Prisma.FieldRef<"students", 'String'>;
    readonly lastName: Prisma.FieldRef<"students", 'String'>;
    readonly class: Prisma.FieldRef<"students", 'String'>;
    readonly section: Prisma.FieldRef<"students", 'String'>;
    readonly phoneNo: Prisma.FieldRef<"students", 'String'>;
    readonly english: Prisma.FieldRef<"students", 'Int'>;
    readonly maths: Prisma.FieldRef<"students", 'Int'>;
    readonly hindi: Prisma.FieldRef<"students", 'Int'>;
    readonly gujarati: Prisma.FieldRef<"students", 'Int'>;
    readonly computer: Prisma.FieldRef<"students", 'Int'>;
    readonly ss: Prisma.FieldRef<"students", 'Int'>;
    readonly science: Prisma.FieldRef<"students", 'Int'>;
    readonly totalMarks: Prisma.FieldRef<"students", 'Int'>;
    readonly grade: Prisma.FieldRef<"students", 'String'>;
    readonly isPass: Prisma.FieldRef<"students", 'Boolean'>;
    readonly fileUrl: Prisma.FieldRef<"students", 'String'>;
    readonly createdAt: Prisma.FieldRef<"students", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"students", 'DateTime'>;
}
/**
 * students findUnique
 */
export type studentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where: Prisma.studentsWhereUniqueInput;
};
/**
 * students findUniqueOrThrow
 */
export type studentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where: Prisma.studentsWhereUniqueInput;
};
/**
 * students findFirst
 */
export type studentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where?: Prisma.studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: Prisma.studentsOrderByWithRelationInput | Prisma.studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: Prisma.studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: Prisma.StudentsScalarFieldEnum | Prisma.StudentsScalarFieldEnum[];
};
/**
 * students findFirstOrThrow
 */
export type studentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where?: Prisma.studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: Prisma.studentsOrderByWithRelationInput | Prisma.studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: Prisma.studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: Prisma.StudentsScalarFieldEnum | Prisma.StudentsScalarFieldEnum[];
};
/**
 * students findMany
 */
export type studentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where?: Prisma.studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: Prisma.studentsOrderByWithRelationInput | Prisma.studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing students.
     */
    cursor?: Prisma.studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: Prisma.StudentsScalarFieldEnum | Prisma.StudentsScalarFieldEnum[];
};
/**
 * students create
 */
export type studentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * The data needed to create a students.
     */
    data: Prisma.XOR<Prisma.studentsCreateInput, Prisma.studentsUncheckedCreateInput>;
};
/**
 * students createMany
 */
export type studentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: Prisma.studentsCreateManyInput | Prisma.studentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * students createManyAndReturn
 */
export type studentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * The data used to create many students.
     */
    data: Prisma.studentsCreateManyInput | Prisma.studentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * students update
 */
export type studentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * The data needed to update a students.
     */
    data: Prisma.XOR<Prisma.studentsUpdateInput, Prisma.studentsUncheckedUpdateInput>;
    /**
     * Choose, which students to update.
     */
    where: Prisma.studentsWhereUniqueInput;
};
/**
 * students updateMany
 */
export type studentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: Prisma.XOR<Prisma.studentsUpdateManyMutationInput, Prisma.studentsUncheckedUpdateManyInput>;
    /**
     * Filter which students to update
     */
    where?: Prisma.studentsWhereInput;
    /**
     * Limit how many students to update.
     */
    limit?: number;
};
/**
 * students updateManyAndReturn
 */
export type studentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * The data used to update students.
     */
    data: Prisma.XOR<Prisma.studentsUpdateManyMutationInput, Prisma.studentsUncheckedUpdateManyInput>;
    /**
     * Filter which students to update
     */
    where?: Prisma.studentsWhereInput;
    /**
     * Limit how many students to update.
     */
    limit?: number;
};
/**
 * students upsert
 */
export type studentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * The filter to search for the students to update in case it exists.
     */
    where: Prisma.studentsWhereUniqueInput;
    /**
     * In case the students found by the `where` argument doesn't exist, create a new students with this data.
     */
    create: Prisma.XOR<Prisma.studentsCreateInput, Prisma.studentsUncheckedCreateInput>;
    /**
     * In case the students was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.studentsUpdateInput, Prisma.studentsUncheckedUpdateInput>;
};
/**
 * students delete
 */
export type studentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Filter which students to delete.
     */
    where: Prisma.studentsWhereUniqueInput;
};
/**
 * students deleteMany
 */
export type studentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: Prisma.studentsWhereInput;
    /**
     * Limit how many students to delete.
     */
    limit?: number;
};
/**
 * students without action
 */
export type studentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
};
//# sourceMappingURL=students.d.ts.map
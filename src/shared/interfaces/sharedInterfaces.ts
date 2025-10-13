import { Control, FieldValues } from "react-hook-form";

export interface User {
    id?: string,
    identificador?: string,
    correo: string,
    nombre: string,
    password: string,
    permisos?: Permission[],
    roles?: Role[]
}
export interface link {
    active: boolean,
    label: string,
    url: string

}

export interface UserFormModalProps {
    open: boolean;
    handleOpen: Function;
    permisos: string[]
    roles: string[]
    loading: boolean
    activeUser: User
    onSaveOrUptdate: Function
    titulo: string
    titleFormModal: Function
    errorMessage: object | string
}

export interface RoleFormModalProps {
    open: boolean;
    handleOpen: Function;
    permisos: string[]
    loading: boolean
    activeRole: Role
    onSaveOrUptdate: Function
    modalTitle: string
    titleFormModal: Function
    errorMessage: object | string
}
export interface PermissionFormModalProps {
    open: boolean;
    handleOpen: Function;
    loading: boolean
    activePermission: Permission
    onSaveOrUptdate: Function
    modalTitle: string
    titleFormModal: Function
    errorMessage: object | string
}
export interface AmmunitionFormModalProps {
    open: boolean;
    handleOpen: Function;
    loading: boolean
    activeAmmunition: Ammunition
    onSaveOrUptdate: Function
    modalTitle: string
    titleFormModal: Function
    errorMessage: object | string
}
export interface DrugFormModalProps {
    open: boolean;
    handleOpen: Function;
    loading: boolean
    activeDrug: Drug
    onSaveOrUptdate: Function
    modalTitle: string
    titleFormModal: Function
    errorMessage: object | string
}
export interface DrugPresentationFormModalProps {
    open: boolean;
    handleOpen: Function;
    loading: boolean
    activeDrugPresentation: DrugPresentation
    onSaveOrUptdate: Function
    modalTitle: string
    titleFormModal: Function
    errorMessage: object | string
}
export interface WeaponFormModalProps {
    open: boolean;
    handleOpen: Function;
    loading: boolean
    activeWeapon: Weapon
    onSaveOrUptdate: Function
    modalTitle: string
    titleFormModal: Function
    errorMessage: object | string
}
export interface ConfiscationFormProps {
    open: boolean;
    handleOpen: Function;
    loading: boolean
    activeConfiscation: Confiscation
    onSaveOrUptdate: Function
    modalTitle: string
    titleFormModal: Function
    errorMessage: object | string
}

export interface TableOptions {
    current_page: number,
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    links: link[],
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url: string,
    to: number,
    total: number
    orderBy: string,
    order: string,
    filterValue: string
}
export interface EntityListProps {
    handleOpen: Function
    handleOpenDialog: Function
    LoadingEntities: Function
    setIdEntity: Function
    EntityCollection: Object[]
    tableOptions: TableOptions
    loading: boolean
    columnsTable: string[],
    editable?: boolean
}
export interface ConfiscationMapModalProps {
    open: boolean
    handleOpen: Function
}
export interface useEntityListProps {
    handleOpen: Function
    handleOpenDialog: Function
    setIdEntity: Function
    columnsTable: string[]
    LoadingEntities: Function,
    editable:boolean
}
export interface UserState {
    users: User[],
    activeUser: User,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}
export interface PhotoInputProps {
    setValueFile: Function,
    control: Control<FieldValues>
}
export interface PhotoInput2Props {
    initFormValues: any,
    register: any
    PhotoRemove:any
    setPhoto:any
}

export interface RoleState {
    roles: Role[],
    activeRole: Role,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}
export interface PermissionState {
    permissions: Permission[],
    activePermission: Permission,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}

export interface AlertDialogProps {
    openDialog: boolean
    DeleteEntity: Function
    handleOpen: Function
    title: string
    dialogMessage: string
}

export interface ResourceState {
    roles: string[],
    permisos: string[],
    loading: boolean
}

export interface SelectResourceState {
    label: string
    value: string
}

export interface MultipleSelectButtonProps {
    optionValues: string[];
    onSelectMultipleValues: Function;
    rolesvalues: Object;
    nameSelect: string;
}
export interface UserValidationsRule {
    correo: Array<string | Function>,
    nombre: Array<string | Function>,
    password: Array<string | Function>,
}

export interface userUseForm {
    user: User,
    formValidations: UserValidationsRule,
}

export interface UserValidationsField {
    nombreValid: string,
    correoValid: string,
    passwordValid: string,
}

export interface Permission {
    id?: string,
    identificador?: string,
    nombre: string,
}
export interface Ammunition {
    id?: string,
    identificador?: string,
    descripcion: string,
    logo: string|File
}
export interface Drug {
    id?: string,
    identificador?: string,
    descripcion: string,
    logo: string|File
}
export interface DrugPresentation {
    id?: string,
    identificador?: string,
    descripcion: string,
    logo: string|File
}
export interface Weapon {
    id?: string,
    identificador?: string,
    descripcion: string,
    logo: string|File
}
export interface Confiscation {
    id?: string,
    identificador?: string,
    fecha: string,
    observacion: string,
    direccion: string,
    departamento: string,
    municipalidad: string,
    latitud: number,
    longitud: number,
}

export interface Role {
    id?: string,
    identificador?: string,
    nombre: string,
    permisos?: Permission[]
}
export interface Activity {
    identificador?: string,
    tipo_de_evento: string,
    id_usuario: number,
    usuario: string,
    cambios: string,
    fecha:string
}

export interface ActivityState {
    activities: Activity[],
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}
export interface AmmunitionState {
    ammunitions: Ammunition[],
    activeAmmunition: Ammunition,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}
export interface DrugState {
    drugs: Drug[],
    activeDrug: Drug,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}
export interface DrugPresentationState {
    drugPresentations: DrugPresentation[],
    activeDrugPresentation: DrugPresentation,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}
export interface WeaponState {
    weapons: Weapon[],
    activeWeapon: Weapon,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}
export interface ConfiscationState {
    confiscations: Confiscation[],
    activeConfiscation: Confiscation,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}

export interface FileUploadFieldProps {
    name: string;
    control: any;
    label?: string;
    accept?: string;
    multiple?:boolean
}



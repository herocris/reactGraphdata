import { PieGraph } from './../../modules/graph/components/PieGraph';
import { Control, FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";

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
    permisos: SelectOptions[]
    roles: SelectOptions[]
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
    permisos: SelectOptions[]
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
    //activeConfiscation: Confiscation
    //onSaveOrUptdate: Function
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
    handleOpen: Function
    lat: number,
    lng: number,
    nameLat: string,
    nameLng: string,
    nameDepto: string,
    nameMuni: string,
    control: any
}

export interface FieldsFormProps {
    handleSubmit: Function
    onSubmit: Function
    loading: boolean
    register: Function
    errors: FieldErrors
    handleOpenMap: Function
    control: any
}
export interface useEntityListProps {
    handleOpen: Function
    handleOpenDialog: Function
    setIdEntity: Function
    columnsTable: string[]
    LoadingEntities: Function,
    editable: boolean,
    tableOptions: TableOptions
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
    PhotoRemove: any
    setPhoto: any
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
    rolesCollection: SelectOptions[],
    permisosCollection: SelectOptions[],
    drugCollection: SelectOptions[],
    drugPresentationCollection: SelectOptions[],
    weaponCollection: SelectOptions[],
    ammunitionCollection: SelectOptions[],
    loading: boolean
}
export interface SelectOptions {
    value: number,
    description: string,
}

export interface SelectResourceState {
    label: string
    value: string
}
export interface GraphState {
    barLineGraph: BarLineGraph[]
    pieGraph: PieGraph[]
    loading: boolean
    errorMessage: object
}
export interface MapState {
    Mapitems: MapItem[]
    loading: boolean
    errorMessage: object
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
    logo: string | File
}
export interface Drug {
    id?: string,
    identificador?: string,
    descripcion: string,
    logo: string | File
}
export interface DrugPresentation {
    id?: string,
    identificador?: string,
    descripcion: string,
    logo: string | File
}
export interface Weapon {
    id?: string,
    identificador?: string,
    descripcion: string,
    logo: string | File
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
export interface DrugConfiscation {
    identificador?: string,
    cantidad: number,
    peso: number,
    decomiso: number,
    droga: number,
    droga_nombre?: string,
    presentacion: number,
    presentacion_nombre?: string,
    foto: string | File
}
export interface WeaponConfiscation {
    identificador?: string,
    cantidad: number,
    decomiso: number,
    arma: number,
    arma_nombre?: string,
    foto: string | File
}
export interface AmmunitionConfiscation {
    identificador?: string,
    cantidad: number,
    decomiso: number,
    municion: number,
    municion_nombre?: string,
    foto: string | File
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
    fecha: string
}
export interface BarLineGraph {
    name: string | number;
    [drugName: string]: string | number;
}
export interface PieGraph {
    name: string;
    value: number;
}
export interface MapItem {
    id:number
    observacion:string
    latitud: number;
    longitud: number;
    drug_confiscations:DrugConfiscation[]
    weapon_confiscations:WeaponConfiscation[]
    ammunition_confiscations:AmmunitionConfiscation[]
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
export interface DrugConfiscationState {
    drugConfiscations: DrugConfiscation[],
    activeDrugConfiscation: DrugConfiscation,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}
export interface WeaponConfiscationState {
    weaponConfiscations: WeaponConfiscation[],
    activeWeaponConfiscation: WeaponConfiscation,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}
export interface AmmunitionConfiscationState {
    ammunitionConfiscations: AmmunitionConfiscation[],
    activeAmmunitionConfiscation: AmmunitionConfiscation,
    tableOptions: TableOptions,
    loading: boolean
    errorMessage: object
}

export interface FileUploadFieldProps {
    name: string;
    control: any;
    label?: string;
    accept?: string;
    multiple?: boolean
}

export interface DrugGraphForm {
    period: number;
    start_date: string;
    end_date: string;
    drugs: number[];
    typeGraph: string
}
export interface MapForm {
    start_date: string;
    end_date: string;
    drugs: number[];
    weapons: number[];
    ammunitions: number[];
}
export interface WeaponGraphForm {
    period: number;
    start_date: string;
    end_date: string;
    weapons: number[];
    typeGraph: string
}
export interface AmmunitionGraphForm {
    period: number;
    start_date: string;
    end_date: string;
    ammunitions: number[];
    typeGraph: string
}





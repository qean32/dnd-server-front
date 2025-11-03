export type toastDto = {
    key: toastKeyDto,
    id: number,
    payload: toastPayloadDto,
    view: boolean
}

export type toastPayloadDto = {
    name?: string
    path?: string
    // other ?
}

export type toastKeyDto =
    'add-entity'
    | 'event-message'
    | 'forward-copy'
    | 'add-object'
    | 'email-message' 
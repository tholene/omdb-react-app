export const createMockCreator =
    <T>(baseMock: T) =>
        (partialMock: Partial<T> = {}): T => (
            {
                ...baseMock,
                ...partialMock
            });
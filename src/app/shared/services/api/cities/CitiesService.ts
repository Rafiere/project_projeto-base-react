import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

interface CityProps {
  id: number;
  name: string;
  stars: number;
}

const getAll = async (): Promise<CityProps[] | ApiException> => {
  try {
    const { data } = await Api().get("/city");

    return data;
  } catch (error: any) {
    return new ApiException(
      error.message || "Error when getting all the cities."
    );
  }
};

const getById = async (id: number): Promise<CityProps | ApiException> => {
  try {
    const { data } = await Api().get(`/city/${id}`);

    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error when getting a city.");
  }
};

const create = async (dataForCreate: CityProps) => {
  try {
    const { data } = await Api().post("/city", dataForCreate);

    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error when creating a city.");
  }
};

const updateById = async (id: number, dataForUpdate: CityProps) => {
  try {
    const { data } = await Api().put(`/city/${id}`, dataForUpdate);

    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error when updating a city.");
  }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
  try {
    Api().delete(`/city/${id}`);

    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || "Error when deleting a city.");
  }
};

export const TarefasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};

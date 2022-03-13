import axios from "axios";

export class ReadSourceUrl {
  async execute(sourceUrl: string): Promise<any> {
    return await axios.get(sourceUrl)
      .then(response => {
        return response.data;
      })
      .catch(e => {
        return {
          error: true,
          message: e.message,
        }
      });
  }
}
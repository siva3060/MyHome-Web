export default class RemoveCommunityAdministratorApi {
  constructor(communityId, adminId, token) {
    this.communityId = communityId;
    this.adminId = adminId;
    this.token = token;
  }
  removeAdministrator() {
    console.debug(
      `Remove community administrators api called with adminId[${this.adminId}], communityId[${this.communityId}], token[${this.token}]`
    );
    return fetch(`http://localhost:8080/communities/${this.communityId}/admins/${this.adminId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}

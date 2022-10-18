class Influencers {
  constructor(affiliate_id, banner, createdAt, email,influencerId,name ) {
          this.affiliate_id = affiliate_id;
          this.banner = banner;
          this.createdAt = createdAt;
          this.email = email;
          this.influencerId = influencerId;
          this.name = name;
 
  }
}
 
export { Influencers as InfluencersModel };
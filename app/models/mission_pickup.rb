class MissionPickup < ActiveRecord::Base
  extend DynamicBaseDrop::Droppable
  
  is_droppable
  
  belongs_to :mission
  belongs_to :pickup
  has_many   :participations, :class_name => 'MissionParticipation', :foreign_key => :pickup_id
  
  attr_accessible :pickup_id, :mission_id, :pickup_at, :comment
  
  validates_presence_of :pickup_at, :pickup
  
  def name
    pickup.name
  end
  
  def address_as_string
    pickup.try(:address).to_s
  end
  
end

# == Schema Info
#
# Table name: mission_pickups
#
#  id         :integer(4)      not null, primary key
#  mission_id :integer(4)
#  pickup_id  :integer(4)
#  comment    :text
#  created_at :datetime
#  pickup_at  :datetime
#  updated_at :datetime